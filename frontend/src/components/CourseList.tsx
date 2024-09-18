export default function CourseList({
  courses,
  onEdit,
  onDelete,
  onViewDetails,
}) {
  return (
    <ul className="space-y-4">
      {courses.map((course, index) => (
        <li
          key={course.id}
          className="flex justify-between items-center p-4 border rounded-md shadow-sm"
        >
          <div>
            <h2 className="font-semibold text-lg">{course.titulo}</h2>
            <p className="text-gray-600">Preço: {course.preco}</p>
          </div>
          <div className="space-x-2">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => onEdit(course, index)}
            >
              Editar
            </button>
            <button
              className="text-red-500 hover:underline"
              onClick={() => onDelete(index)}
            >
              Excluir
            </button>
            <button
              className="text-green-500 hover:underline"
              onClick={() => onViewDetails(course.id)}
            >
              Ver Detalhes
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
