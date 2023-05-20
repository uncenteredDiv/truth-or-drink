import { resolve } from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const cardTemplate = resolve("./src/templates/card.tsx");

  const { data }: any = await graphql(`
    query {
      allJsonFile {
        nodes {
          name
          slug
          colorTheme
          data {
            preCondition
            question
            type
          }
        }
      }
    }
  `);

  data.allJsonFile.nodes.forEach(({ name, slug, colorTheme, data }: any) => {
    const count = data.length;

    data.forEach((data: any, index: number) => {
      const id = index + 1;

      createPage({
        path: `/${slug}/${id}`,
        component: cardTemplate,
        context: {
          id,
          name,
          slug,
          colorTheme,
          count,
          ...data,
        },
      });
    });
  });
};
