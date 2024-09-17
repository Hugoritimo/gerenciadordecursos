"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Heading,
  Text,
  Spinner,
  Image,
  VStack,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Componente animado
const AnimatedBox = motion(Box);

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função assíncrona para carregar os dados
    const loadCourseDetails = async () => {
      try {
        const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
        const foundCourse = savedCourses.find((course) => course.id === id);
        if (foundCourse) {
          setCourse(foundCourse);
        }
      } catch (error) {
        console.error("Erro ao carregar os detalhes do curso:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadCourseDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!course) {
    return (
      <Box textAlign="center" mt={10}>
        <Heading color="red.500">Curso não encontrado</Heading>
      </Box>
    );
  }

  return (
    <AnimatedBox
      p={8}
      bg="gray.100"
      borderRadius="md"
      boxShadow="xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Stack direction={["column", "row"]} spacing={8}>
        {course.image && (
          <Image
            src={
              typeof course.image === "string"
                ? course.image
                : URL.createObjectURL(course.image)
            }
            alt={course.name}
            borderRadius="md"
            maxHeight="400px"
            objectFit="cover"
          />
        )}

        <VStack align="start" spacing={4}>
          <Heading mb={2} color="blue.600">
            {course.name}
          </Heading>

          <Badge colorScheme="green" fontSize="1.2em">
            {course.duration} horas
          </Badge>

          <Text fontSize="lg" fontWeight="bold">
            Preço:{" "}
            <Text as="span" color="blue.500">
              R$ {course.price}
            </Text>
          </Text>

          <Text fontSize="lg" fontWeight="bold">
            Preço com Desconto:{" "}
            <Text as="span" color="green.500">
              R$ {course.discountPrice}
            </Text>
          </Text>

          <Text mt={4} fontSize="md">
            {course.content}
          </Text>
        </VStack>
      </Stack>
    </AnimatedBox>
  );
};

export default CourseDetails;
