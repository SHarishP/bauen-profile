import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBauenAboutUsFields {
  aboutUsHeroTitle?: EntryFieldTypes.Symbol;
  aboutUsHeroBg?: EntryFieldTypes.AssetLink;
  aboutUsOverview?: EntryFieldTypes.Text;
  aboutUsOverviewBg?: EntryFieldTypes.AssetLink;
  aboutUsStory?: EntryFieldTypes.Text;
  aboutUsVision?: EntryFieldTypes.Text;
  aboutUsMission?: EntryFieldTypes.Text;
  aboutUsCulture?: EntryFieldTypes.Text;
  aboutUsStoryBg?: EntryFieldTypes.AssetLink;
  aboutUsVisionBanner?: EntryFieldTypes.AssetLink;
}

export type TypeBauenAboutUsSkeleton = EntrySkeletonType<
  TypeBauenAboutUsFields,
  "bauenAboutUs"
>;
export type TypeBauenAboutUs<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBauenAboutUsSkeleton, Modifiers, Locales>;

export interface TypeBauenContentFields {
  homeTitle?: EntryFieldTypes.Symbol;
  homeSlug?: EntryFieldTypes.Symbol;
  homeHeroBrief?: EntryFieldTypes.RichText;
  homeHeroBg?: EntryFieldTypes.AssetLink;
}

export type TypeBauenContentSkeleton = EntrySkeletonType<
  TypeBauenContentFields,
  "bauenContent"
>;
export type TypeBauenContent<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBauenContentSkeleton, Modifiers, Locales>;

export interface TypeBauenHomeFields {
  homeTitle?: EntryFieldTypes.Symbol;
  bauenHeroBrief?: EntryFieldTypes.Text;
  homeHeroBg?: EntryFieldTypes.AssetLink;
  aboutUsTitle?: EntryFieldTypes.Symbol;
  aboutUsBrief?: EntryFieldTypes.Text;
  teamTitle?: EntryFieldTypes.Symbol;
  teamBriefOne?: EntryFieldTypes.Text;
  teamBriefTwo?: EntryFieldTypes.Symbol;
  servicesTitle?: EntryFieldTypes.Symbol;
  testimonialTitle?: EntryFieldTypes.Symbol;
  aboutUsImg?: EntryFieldTypes.AssetLink;
}

export type TypeBauenHomeSkeleton = EntrySkeletonType<
  TypeBauenHomeFields,
  "bauenHome"
>;
export type TypeBauenHome<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBauenHomeSkeleton, Modifiers, Locales>;

export interface TypeBauenLeaderFields {
  leaderName?: EntryFieldTypes.Symbol;
  leaderPosition?: EntryFieldTypes.Symbol;
  leaderBrief?: EntryFieldTypes.Symbol;
  leaderImg?: EntryFieldTypes.AssetLink;
}

export type TypeBauenLeaderSkeleton = EntrySkeletonType<
  TypeBauenLeaderFields,
  "bauenLeader"
>;
export type TypeBauenLeader<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBauenLeaderSkeleton, Modifiers, Locales>;

export interface TypeBauenServiceFields {
  serviceName?: EntryFieldTypes.Symbol;
  serviceBriefShort?: EntryFieldTypes.RichText;
  serviceLogo?: EntryFieldTypes.AssetLink;
  serviceBriefLong?: EntryFieldTypes.RichText;
  serviceImage?: EntryFieldTypes.AssetLink;
}

export type TypeBauenServiceSkeleton = EntrySkeletonType<
  TypeBauenServiceFields,
  "bauenService"
>;
export type TypeBauenService<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBauenServiceSkeleton, Modifiers, Locales>;

export interface TypeBauenTeamFields {
  teamName?: EntryFieldTypes.Symbol;
  teamPosition?: EntryFieldTypes.Symbol;
  teamBrief?: EntryFieldTypes.Symbol;
  teamImg?: EntryFieldTypes.AssetLink;
}

export type TypeBauenTeamSkeleton = EntrySkeletonType<
  TypeBauenTeamFields,
  "bauenTeam"
>;
export type TypeBauenTeam<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBauenTeamSkeleton, Modifiers, Locales>;

export interface TypeBauenTestimonialFields {
  testimonialTitle?: EntryFieldTypes.Symbol;
  testimonialLoc?: EntryFieldTypes.Symbol;
  testimonialUser?: EntryFieldTypes.Symbol;
  testimonialComment?: EntryFieldTypes.Text;
  testimonialImg?: EntryFieldTypes.AssetLink;
}

export type TypeBauenTestimonialSkeleton = EntrySkeletonType<
  TypeBauenTestimonialFields,
  "bauenTestimonial"
>;
export type TypeBauenTestimonial<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBauenTestimonialSkeleton, Modifiers, Locales>;

export interface IAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: any;
      fileName?: string;
      contentType?: string;
    };
  };
}
