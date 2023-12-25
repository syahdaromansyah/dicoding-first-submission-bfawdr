let notesDB = [
  {
    id: 'notes-1',
    title: 'React Markdown',
    body: '# React Router\n\nReact router is [available in here](https://reactrouter.com)\n\n## How to Install\n\nInstall React Router: `npm i react-router-dom`\n\n### Introduction\n\nStrikethrough text: ~~This is a strikethrough text~~\n\nItalic text: _This is an italic text_\n\nBold text: __This is a bold text__\n\n> This is a blockquote text\n\nBelow is a table:\n\n|   Nation    |   State   |   City    |\n|     --      |    --     |    --     |\n|  Indonesia  | West Java |  Bandung  |\n\n```jsx\nexport default function AppPage() {\n  return (\n    <h1>Hello, world!</h1>\n  );\n}\n```',
    createdAt: '2023-12-17T13:27:44.031Z',
    archived: false,
  },
  {
    id: 'notes-2',
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-3',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 'notes-7',
    title: 'Function Component in React Web Framework',
    body: 'React Function Component adalah jenis React component yang memiliki syntax yang lebih simple dan memungkinkan kita untuk menggunakan React Hooks.',
    createdAt: '2023-12-16T07:10:42.041Z',
    archived: true,
  },
  {
    id: 'notes-8',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
];

const getNoteById = (id) => notesDB.find((note) => note.id === id) || null;

const getActiveNotes = () => notesDB.filter((notes) => !notes.archived);

const getArchivedNotes = () => notesDB.filter((notes) => notes.archived);

const addNote = ({ title, body = '' }) => {
  notesDB = [
    ...notesDB,
    {
      id: `notes-${Date.now()}`,
      title: title || 'Untitled',
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    },
  ];
};

const deleteNoteById = (id) => {
  notesDB = notesDB.filter((notes) => notes.id !== id);
};

const archiveNoteById = (id) => {
  notesDB = notesDB.map((notes) => {
    if (notes.id === id)
      return {
        ...notes,
        archived: true,
      };

    return notes;
  });
};

const unArchiveNoteById = (id) => {
  notesDB = notesDB.map((notes) => {
    if (notes.id === id)
      return {
        ...notes,
        archived: false,
      };

    return notes;
  });
};

export {
  addNote,
  archiveNoteById,
  deleteNoteById,
  getActiveNotes,
  getArchivedNotes,
  getNoteById,
  unArchiveNoteById,
};
