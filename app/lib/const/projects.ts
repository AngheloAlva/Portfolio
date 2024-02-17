export const projects = [
  {
    title: 'Pet Shop',
    description: 'Ecommerce for food, accessories, medicine, etc. of common and exotic pets.',
    descriptionEs: 'Ecommerce para comida, acessorios, medicina, etc. de mascotas comunes y exoticas.',
    challenges: ['The management of the global state linked to the server and database.', 'The integration of Clerk for authentication added to the creation and management of users with the server.'],
    challengesEs: ['El manejo del estado global enlazado el servidor y base de datos.', 'La integracion de Clerk para la autenticacion sumado a la creacion y manejo de de usuarios con el servidor.'],
    image: '/projects/petshop.png',
    link: 'https://pet-shop-angheloalva.vercel.app',
    code: 'https://github.com/AngheloAlva/Pet-shop',
    techs: ['Next.js', 'TailwindCSS', 'TypeScript', 'Zustand', 'Clerk']
  },
  {
    title: 'Pet Shop Server',
    description: 'Server created specifically for pet ecommerce. This handles all the routes and the database.',
    descriptionEs: 'Servidor creado especificamente para el ecommerce de mascotas. Este maneja todas las rutas y la base de datos.',
    challenges: ['Learn to use Prisma as an ORM.', 'Stripe integration for payments.', 'Linked user management with Clerk and the server.'],
    challengesEs: ['Aprender a usar Prisma como ORM.', 'La integracion de Stripe para los pagos.', 'El manejo enlazado del usuario con Clerk y el servidor.'],
    image: '/projects/petshop-server.png',
    link: 'https://documenter.getpostman.com/view/28661445/2sA2r7zi8q',
    code: 'https://github.com/AngheloAlva/Pet-shop-server',
    techs: ['Node.js', 'Express', 'TypeScript', 'PostgresSQL', 'Stripe']
  },
  {
    title: 'ScholaNet',
    description: 'Complete school system, it has an Intranet for communication between teachers and students, a note, homework and attendance system, and an administration system for managers.',
    descriptionEs: 'Sistema escolar completeo, cuenta con un Intranet para la comunicacion entre los maestros y los estudiantes, un sistema de notas, tareas y asistencia, y un sistema de administracion para los directivos.',
    challenges: ['Correctly create note, task and attendance systems.', 'Creation of the Intranet.', 'Management of user authentication and authorization.'],
    challengesEs: ['Crear correctamente los sistemas de notas, tareas y asistencias.', 'La creacion del Intranet.', 'El manejo de la autenticacion y autorizacion de los usuarios.'],
    image: '/projects/scholanet.png',
    link: 'not found',
    code: 'https://github.com/AngheloAlva/ScholaNet',
    techs: ['Next.js', 'TailwindCSS', 'TypeScript']
  },
  {
    title: 'ScholaNet Server',
    description: 'Server created specifically for the school system. This handles all the routes and the database.',
    descriptionEs: 'Servidor creado especificamente para el sistema escolar. Este maneja todas las rutas y la base de datos.',
    challenges: ['Implement an authentication and authorization system for users.', 'The creation of note, task and attendance systems.'],
    challengesEs: ['Implementar un sistema de autenticacion y autorizacion para los usuarios.', 'La creacion de los sistemas de notas, tareas y asistencias.'],
    image: '/projects/scholanet-server.png',
    link: 'not found',
    code: 'https://github.com/AngheloAlva/ScholaNet-Express',
    techs: ['Node.js', 'Express', 'TypeScript', 'MongoDB']
  }
]
