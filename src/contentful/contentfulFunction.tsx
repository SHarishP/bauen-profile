import contentfulClient from "./contentfulClient";
import {
  TypeBauenHomeSkeleton,
  TypeBauenAboutUsSkeleton,
  TypeBauenLeaderSkeleton,
  TypeBauenServiceSkeleton,
  TypeBauenTestimonialSkeleton,
} from "./bauen.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

type RichTextProps = {
  document: RichTextDocument | undefined;
};

export function RichText({ document }: RichTextProps) {
  if (!document) return null;

  return <>{documentToReactComponents(document)}</>;
}

export const getBauenContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBauenHomeSkeleton>({
      content_type: "bauenHome",
    });
    // console.log(data.items[0].fields.homeHeroBg);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBauenAboutUs = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBauenAboutUsSkeleton>({
      content_type: "bauenAboutUs",
    });
    // console.log(data.items);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBauenLeader = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBauenLeaderSkeleton>({
      content_type: "bauenLeader",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBauenServiceItem = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBauenServiceSkeleton>({
      content_type: "bauenService",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBauenTestimonial = async () => {
  try {
    const data =
      await contentfulClient.getEntries<TypeBauenTestimonialSkeleton>({
        content_type: "bauenTestimonial",
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};
