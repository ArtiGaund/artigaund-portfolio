import conf from "@/app/conf/conf";
import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

type NotionProject = QueryDatabaseResponse["results"][number];

const notion = new Client({
  auth: conf.notionSecretKey,
});

// Type guard to narrow down only to full pages
function isFullPage(page: NotionProject): page is PageObjectResponse {
  return "properties" in page;
}

export async function getProjectPosts() {
  const databaseId = conf.notionWebId;
  const response = await notion.databases.query({
    database_id: databaseId!,
  });

  return response.results
    .filter(isFullPage) // ensures properties exist
    .flatMap((project) => {
      const properties = project.properties;

      const title =
        properties["Title"].type === "title" &&
        properties["Title"].title.length
          ? properties["Title"].title[0].plain_text
          : "untitled";

      const shortDescription =
        properties["Short description"].type === "rich_text"
          ? properties["Short description"].rich_text
              .map((text) => text.plain_text)
              .join("")
          : "";

      const fullContent =
        properties["Full Content"].type === "url"
          ? properties["Full Content"].url ?? ""
          : "";

      const liveLink =
        properties["Live Link"].type === "url"
          ? properties["Live Link"].url ?? ""
          : "";

      const githubLink =
        properties["Github link"].type === "url"
          ? properties["Github link"].url ?? ""
          : "";

      const thumbnail =
        properties["Thumbnail image url"].type === "url"
          ? properties["Thumbnail image url"].url ?? ""
          : "";

      const technologies =
        properties["Technologies used"].type === "multi_select"
          ? properties["Technologies used"].multi_select.map((tech) => tech.name)
          : [];

      const status =
        properties["Project Status"].type === "status"
          ? properties["Project Status"].status?.name
          : undefined;

      const category =
        properties["Category"].type === "select"
          ? properties["Category"].select?.name
          : undefined;

      return {
        id: project.id,
        title,
        shortDescription,
        fullContent,
        liveLink,
        githubLink,
        thumbnail,
        technologies,
        status,
        category,
      };
    });
}

export async function getNotionPageContent(pageId: string) {
const blocks = await notion.blocks.children.list({ block_id: pageId });
return blocks.results;
} 