'use client';

import { Image, Text, Group, Title, Grid, TypographyStylesProvider, Flex, Center } from "@mantine/core";
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
    <Grid pt="md" mx={"10%"} align="center">
      <Grid.Col span={{ xs: 12, md: 3.3 }}>
        <Center>
          <Image radius="100%" mah="200" w="auto" fit="contain" src="images/profile.jpg" mr={{ md: 10 }} />
        </Center>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, md: 8.7 }}>
        <Title order={1}>{data.name}</Title>
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </TypographyStylesProvider>
      </Grid.Col>
    </Grid>
  );
}
