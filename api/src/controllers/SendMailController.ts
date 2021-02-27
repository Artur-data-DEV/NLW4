import { getCustomRepository } from "typeorm";
import { resolve } from "path";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveyUsersRepository } from "../repositories/SurveysUserRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendMailService from "../services/SendMailService";
import { SurveyUser } from "../models/SurveyUser";
import { Request, Response} from 'express';
import { AppError } from "./errors/AppError";


class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveyUsersRepository = getCustomRepository(SurveyUsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
        throw new AppError("Survey does not exists!")
    }

    const survey = await surveysRepository.findOne({ id: survey_id });

    if (!survey) {
        throw new AppError("Survey does not exists!") 
    }

    const npsPath = resolve(__dirname, "..", "views", "emails", "npsmail.hbs");

    const surveyUserAlreadyExists = await surveyUsersRepository.findOne({
      where: { user_id: user.id, value: null },
      relations: ["user", "survey"],
    });

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      user_id: user.id,
      link: process.env.URL_MAIL,
    };

    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id;
      await SendMailService.execute(email, survey.title, variables, npsPath);
      return response.json(surveyUserAlreadyExists);
    }
    //Salvar as informações na tabela surveyUser
    const surveyUser = surveyUsersRepository.create({
      user_id: user.id,
      survey_id,
    });

    await surveyUsersRepository.save(surveyUser);
    //Enviar e-mail para usuario

    variables.id = surveyUser.id;

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return response.json(surveyUser);
  }
}

export { SendMailController };
