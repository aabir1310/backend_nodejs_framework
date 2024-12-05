let Joi = require("joi");
//import { SQLProvider } from '../repository/SQLQueries';
// const statusKeys = SQLProvider.values.statusKeys;
// const dbKeys = SQLProvider.values.dbKeys;

export const RequestSchema: any = {

    type1: {
        //category: Joi.string().required(),
        certificatetitle: Joi.string().required(),
        description: Joi.string().required(),
        category_name: Joi.string().valid(
            'Data Protection and Privacy Certificate',
            'Information Security Management Certificates',
            'Regulatory Compliance Certificate',
            'Quality Management Certificate',
            'Ethical and Social Responsibility Certificate',
            'Industry-Specific Certificates'
        ).required()
    },
    type2: {
        compliance_id: Joi.number().required()
    },
    type3:{
        question:Joi.string().required(),
        answer:Joi.string().required(),
        category:Joi.string().required(),
    },
    type4:{
        faq_id:Joi.number().required()
    }
}