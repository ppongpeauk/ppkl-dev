"use client";

import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Nav from "components/Nav";
import Head from "next/head";
import Image from "next/image";
import { Suspense } from "react";
import {
  FaKey
} from "react-icons/fa";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Page() {
  return (
    <>
      <Head>
        <title>Pete Pongpeauk</title>
        <meta
          name="description"
          content="Pete Pongpeauk is a software developer and designer based in Washington, DC."
        />
        <meta property="og:title" content="Pete Pongpeauk" />
        <meta
          property="og:description"
          content="Pete Pongpeauk is a software developer and designer based in Washington, DC."
        />
        <meta property="og:url" content="https://ppkl.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/profile.png" />
        <meta property="og:image:alt" content="Pete Pongpeauk" />
      </Head>
      <Box as="main" pb={8}>
        <Head>
          {/* TODO: metadata */}
          <title>Pete Pongpeauk - Home</title>
        </Head>
        <Box>
          <Nav />
        </Box>
        <Container maxW="container.lg" pt={36}>
          <Suspense fallback={<Spinner />}>
            <Section delay={0.1}>
              <Box
                as="main"
                pb={8}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  mr="8"
                  borderRadius="100%"
                  overflow="hidden"
                  outline="2px solid"
                  outlineColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <Image
                    src="/images/profile.png"
                    alt="Pete Pongpeauk"
                    width={160}
                    height={160}
                  />
                </Box>
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    Pete Pongpeauk
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="bold"
                  >
                    (Software Developer)
                  </Text>
                </Box>
              </Box>
            </Section>
            <Box maxW="container.sm" margin="auto">
              <Section delay={0.2}>
                <Box maxW="container.md">
                  <Heading
                    as="h3"
                    fontSize="2xl"
                    variant="section-title"
                  >
                    About
                  </Heading>
                  <Paragraph>
                    Pete is a software developer based in
                    Washington, DC. He is currently studying Computer Science at
                    George Mason University in Fairfax, Virginia.
                  </Paragraph>
                </Box>
              </Section>
              <Section delay={0.3}>
                <Box maxW="container.md">
                  <Heading
                    as="h3"
                    fontSize="2xl"
                    variant="section-title"
                  >
                    On The Web
                  </Heading>
                  <Flex flexDir={'column'} gap={0}>
                    <Link href="https://github.com/ppongpeauk" isExternal w={'fit-content'}>
                      <Button size={"md"} variant="ghost" leftIcon={<IoLogoGithub />}>
                        GitHub
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/pete-pongpeauk" isExternal w={'fit-content'}>
                      <Button size={"md"} variant="ghost" leftIcon={<IoLogoLinkedin />}>
                        LinkedIn
                      </Button>
                    </Link>
                    <Link href="https://twitter.com/restrafes" isExternal w={'fit-content'}>
                      <Button size={"md"} variant="ghost" leftIcon={<IoLogoTwitter />}>
                        Twitter
                      </Button>
                    </Link>
                    <Link href="https://instagram.com/pete.pkl" isExternal w={'fit-content'}>
                      <Button size={"md"} variant="ghost" leftIcon={<IoLogoInstagram />}>
                        Instagram
                      </Button>
                    </Link>
                    <Link href="/Pete Pongpeauk (2BBF9BAE) – Public.asc" isExternal w={'fit-content'}>
                      <Button size={"md"} variant="ghost" leftIcon={<FaKey />}>
                        Public Key
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Section>
            </Box>
          </Suspense>
        </Container>
      </Box>
    </>
  );
}
