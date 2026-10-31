import { z } from "zod";

const text = z.string().trim().min(1);

const experienceSchema = z.object({
  company: text,
  role: text,
  location: text.optional(),
  period: text,
  highlights: z.array(text).min(1),
});

const educationSchema = z.object({
  degree: text,
  school: text,
});

const languageSchema = z.object({
  name: text,
  level: text,
});

const skillGroupSchema = z.object({
  name: text,
  daily: z.array(text),
  notions: z.array(text),
});

const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: text,
  summary: text,
  role: text,
  organization: text,
  status: text,
  stack: z.array(text).min(1),
  /** Client or employer project: no code link, real data or live link. */
  confidential: z.boolean(),
  links: z.object({
    repository: z.url().optional(),
    demo: z.url().optional(),
  }),
});

export const contentSchema = z
  .object({
    profile: z.object({
      title: text,
      tagline: text,
      about: z.array(text).min(1),
      location: text,
      availability: text,
    }),
    experience: z.array(experienceSchema).min(1),
    education: z.array(educationSchema).min(1),
    languages: z.array(languageSchema).min(1),
    skills: z.array(skillGroupSchema).min(1),
    projects: z.array(projectSchema).min(1),
  })
  .refine(
    ({ projects }) =>
      projects
        .filter((project) => project.confidential)
        .every((project) => !project.links.repository && !project.links.demo),
    { message: "Confidential projects cannot expose repository or demo links" },
  );

export type Content = z.infer<typeof contentSchema>;
export type Project = Content["projects"][number];
