export const SQLProvider: any = {
    values: {

        schema_CMN: process.env.DB_SCHEMA2_CMN || "master",

        microService: 'Chat_App_Backend',
        endpoint: process.env.ENDPOINT || 'https://s3.us-south.cloud-object-storage.appdomain.cloud',
        apiKeyId: process.env.APIKEYID || 'Fz8zHlnWQ7UAzY-zZOlN21U4UJtIBclHOrZAEzZFUfrG',
        FaqVideoName: `FaqVideos.mp4`,
        jwtSecretKey : process.env.JWT_SECRET_KEY || "McFcd#18Aa45628E2fc7%eMbk1e171#b63t1bm9aep$311da0@c4bf1!239Mx92U", 
    },
    query: {

        addCompliance: "insert into ${schema~}.Compliance_master (certificate_title,description,category_id,certificate_name,certificate_id) Values(${certificate_title},${description},${category_id},${certificate_name},${certificate_id}) RETURNING *",
        getAlldataFromCompliance: "Select * from ${schema~}.Compliance_master where compliance_id=${compliance_id}",
        getAlldataFromComplianceByname: "Select * from ${schema~}.Compliance_master where certificate_title=${certificate_title}",
        UpdateCompilance: "update ${schema~}.Compliance_master set  category_id=${category_id},certificate_title=${certificate_title},description=${description},certificate_name=${certificate_name},certificate_id=${certificate_id} where compliance_id=${compliance_id} returning *",
        getCategoryName: "select * from ${schema~}.category_master  where category_name=${category_name}",
        getCompilanceDataById: "select * from ${schema~}.Compliance_master where compliance_id=${compliance_id}",
        deleteCompliance: "delete  from ${schema~}.Compliance_master where compliance_id=${compliance_id} ",
        getCategory: "select * from  ${schema~}.category_master",
        getAllCompliance: "select * from ${schema~}.Compliance_master ORDER BY compliance_id DESC ",
        faqcategory: "select * from ${schema~}.faqcategory ",
        insertcatgory: "Insert into ${schema~}.faqcategory (category) values (${category}) returning id ",
        AddFaq: "insert into ${schema~}.faq_master (question ,answer,category_id) values(${question},${answer},${category}) RETURNING id",
        getAllFaq: "select * from ${schema~}.faq_master where category_id=${categoryId} ",
        updateFaq: "Update ${schema~}.faq_master set question=${question},answer=${answer},category_id=${category} where id=${faqId}",
        deleteFaq: "delete from ${schema~}.faq_master where id=${faqId}  ",
        bulkIngestion: "INSERT INTO ${schema~}.faq_master (question, answer, category_id) VALUES (${question},${answer},${category_id}) ;",
        addCategory: "Insert Into ${schema~}.faqcategory (category) values (${category})",
        getFaqById: "Select * from  ${schema~}.faq_master where id=${FaqId}",

    },
    apis: {
        basePath: {

        },
        route: {

        }
    }
}
