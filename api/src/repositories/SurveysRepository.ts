import { Entity, EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";
import { User } from "../models/user";

@EntityRepository(Survey)
class SurveysRepository extends Repository <Survey>{}

export {SurveysRepository};