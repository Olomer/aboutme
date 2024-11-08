'use client';

import { Image, Text, Group, Title, Grid, TypographyStylesProvider } from "@mantine/core";
import about from "../data/about/aboutApiService";
import {
  useTranslation,
  LanguageSwitcher,
  LinkWithLocale
} from "next-export-i18n";

export default function HomePage() {
  const { t } = useTranslation();
  const data = about.getAboutData();

  return (
    <Group grow >
      <Image radius="100%" h={200} w="auto" fit="contain" src="images/profile.jpg" mx={100} />
      <Grid pt="md">
        <Grid.Col span={12}><Title order={1}>{data.name}</Title></Grid.Col>
        <Grid.Col span={12}>
          <TypographyStylesProvider>
            <div
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </TypographyStylesProvider>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
