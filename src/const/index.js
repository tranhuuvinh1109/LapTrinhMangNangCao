const dataTable = [
  {
    id: 1,
    projectName: "Project name 1",
    user: {
      id: 1,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Adam Smith",
      email: "adam@gmail.com",
    },
    status: "done",
    progress: 100,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 2,
    projectName: "Project name 2",
    user: {
      id: 2,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Tran Hong Duc",
      email: "tranhongduc@gmail.com",
    },
    status: "training",
    progress: 80,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 3,
    projectName: "Project name 3",
    user: {
      id: 3,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Phan Tan Quynh",
      email: "phantanquynh@gmail.com",
    },
    status: "done",
    progress: 100,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 4,
    projectName: "Project name 4",
    user: {
      id: 4,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Nguyen Van Khoa",
      email: "KhoaKun27@gmail.com",
    },
    status: "training",
    progress: 50,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 5,
    projectName: "Project name 5",
    user: {
      id: 5,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Le Tien Dat",
      email: "Dat1lit@gmail.com",
    },
    status: "training",
    progress: 95,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 6,
    projectName: "Project name 5",
    user: {
      id: 5,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Le Tien Dat",
      email: "Dat1lit@gmail.com",
    },
    status: "training",
    progress: 95,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 7,
    projectName: "Project name 5",
    user: {
      id: 5,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Le Tien Dat",
      email: "Dat1lit@gmail.com",
    },
    status: "training",
    progress: 95,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 8,
    projectName: "Project name 5",
    user: {
      id: 5,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Le Tien Dat",
      email: "Dat1lit@gmail.com",
    },
    status: "training",
    progress: 95,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
  {
    id: 9,
    projectName: "Project name 5",
    user: {
      id: 5,
      avatar:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
      username: "Le Tien Dat",
      email: "Dat1lit@gmail.com",
    },
    status: "training",
    progress: 95,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
    createAt: "2020-07-25T14:10:26.113Z",
  },
];

const userTable = [
  {
    id: 1,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Adam Smith",
    email: "adam@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 2,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Tran Hong Duc",
    email: "tranhongduc@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 3,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Phan Tan Quynh",
    email: "phantanquynh@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 4,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Nguyen Van Khoa",
    email: "KhoaKun27@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 5,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Le Tien Dat",
    email: "Dat1lit@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 6,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Nguyen Duc Long",
    email: "longdick@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 7,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Nguyen Duc Long",
    email: "longdick@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 8,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Nguyen Duc Long",
    email: "longdick@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
  {
    id: 9,
    avatar:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-ronaldo-1.jpg",
    username: "Nguyen Duc Long",
    email: "longdick@gmail.com",
    totalProjects: 1,
    linkDrive:
      "https://drive.google.com/drive/folders/1BNV9GQAVJcZpUcV6HLwzfjE6e9cWvwQe?usp=sharing",
  },
];

const viewColumns = {
  id: 1,
  avatar: 1,
  username: 2,
  email: 3,
  totalProjects: 1,
  linkDrive: 1,
};

export { dataTable, userTable, viewColumns };
