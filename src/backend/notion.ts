import conf from "@/app/conf/conf";

import { Client } from "@notionhq/client";

const notion = new Client({
    auth: conf.notionSecretKey,
})

export async function getProjectPosts() {
    const databaseId = conf.notionWebId;
    const response = await notion.databases.query({
        database_id: databaseId!,
    });

    return response.results.flatMap((project: any) => ({
        id: project.id,
        title: project.properties.Title.title[0]?.plain_text || "untitled",
        shortDescription: project.properties["Short description"]?.rich_text?.map((text: any) => text.plain_text).join("") || "",
        fullContent: project.properties["Full Content"]?.url || "",
        liveLink: project.properties["Live Link"]?.url || "",
        githubLink: project.properties["Github link"]?.url || "",
        thumbnail: project.properties["Thumbnail image url"]?.url || "",
        technologies: project.properties["Technologies used"]?.multi_select?.map((tech: any) => tech.name) || [],
        status: project.properties["Project Status"]?.status?.name,
    }))
    // return response.results.map((project: any) => {
    //     console.log("Project data ",project);
    // })
}