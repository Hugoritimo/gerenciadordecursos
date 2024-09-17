import {
  Box,
  Button,
  Text,
  VStack,
  Image,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function CourseList({
  courses,
  onEdit,
  onDelete,
  onViewDetails,
}) {
  return (
    <VStack spacing={6} align="stretch" mt={4}>
      {courses.length === 0 ? (
        <Text fontSize="lg" color="gray.600">
          Nenhum curso cadastrado.
        </Text>
      ) : (
        courses.map((course, index) => (
          <Card
            as={motion.div}
            key={index}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            boxShadow="md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition="0.3s"
          >
            <CardHeader>
              <Heading size="md" color="blue.600">
                {course.name}
              </Heading>
              <Badge colorScheme="green" mt={2}>
                {course.duration} horas
              </Badge>
            </CardHeader>

            <CardBody>
              {course.image && (
                <Image
                  src={
                    typeof course.image === "string"
                      ? course.image
                      : URL.createObjectURL(course.image)
                  }
                  alt={course.name}
                  borderRadius="md"
                  maxHeight="200px"
                  objectFit="cover"
                  mb={4}
                />
              )}
              <Text mt={2}>Preço: R$ {course.price}</Text>
              <Text>Preço com Desconto: R$ {course.discountPrice}</Text>
              <Text mt={4}>{course.content}</Text>
            </CardBody>

            <CardFooter>
              <HStack spacing={4}>
                <Button
                  colorScheme="blue"
                  onClick={() => onEdit(course, index)}
                >
                  Editar
                </Button>
                <Button colorScheme="red" onClick={() => onDelete(index)}>
                  Excluir
                </Button>
                <Button
                  colorScheme="green"
                  onClick={() => onViewDetails(course.id)}
                >
                  Ver Detalhes
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))
      )}
    </VStack>
  );
}
