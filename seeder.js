const { MongoClient, ObjectId } = require("mongodb");
const faker = require("faker");

const mongo = new MongoClient("mongodb://localhost");
const dbName = "your_database_name"; // Replace with your actual database name
const client = await mongo.connect();
const db = client.db(dbName);

// Function to generate a random element from an array
function getRandomFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

async function seedUsers() {
    await db.collection("users").deleteMany({});
  
    const roles = ["Admin", "Teacher", "Student"];
    const users = [];
  
    for (let i = 0; i < 100; i++) {
      const role = getRandomFromArray(roles);
      const user = {
        _id: new ObjectId(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        profile: faker.lorem.sentence(),
        role,
      };
  
      users.push(user);
    }
  
    await db.collection("users").insertMany(users);
  }
  async function seedTeacher() {
    await db.collection("teachers").deleteMany({});
  
    const teachers = [];
  
    const users = await db.collection("users").find({ role: "Teacher" }).toArray();
    for (const user of users) {
      const teacher = {
        _id: user._id,
        bio: faker.lorem.paragraph(),
        student_id: [], // Initialize with empty array
        courses: [], // Initialize with empty array
        chatRoom_id: new ObjectId(), // Generate new ObjectId
        bluemark: faker.random.boolean(),
      };
  
      teachers.push(teacher);
    }
  
    await db.collection("teachers").insertMany(teachers);
  }

async function seedAdmin() {
  // Similar structure as seedUsers, but for admins
}

async function seedStudent() {
  // Similar structure as seedUsers, but for students
}

async function seedChatRoom() {
    await db.collection("chatRooms").deleteMany({});
  
    const chatRooms = [];
  
    const students = await db.collection("users").find({ role: "Student" }).toArray();
    const teachers = await db.collection("users").find({ role: "Teacher" }).toArray();
  
    for (let i = 0; i < 50; i++) {
      const participantStudent = getRandomFromArray(students);
      const participantTeacher = getRandomFromArray(teachers);
      const chatRoom = {
        _id: new ObjectId(),
        participants: [participantStudent._id, participantTeacher._id],
        message: [], // Initialize with empty array
      };
  
      chatRooms.push(chatRoom);
    }
  
    await db.collection("chatRooms").insertMany(chatRooms);
  }

async function seedMessage() {
  // Similar structure as seedUsers, but for messages
}

async function seedCourses() {
    await db.collection("courses").deleteMany({});
  
    const courses = [];
  
    const teachers = await db.collection("teachers").find().toArray();
  
    for (let i = 0; i < 50; i++) {
      const course = {
        _id: new ObjectId(),
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        category: getRandomFromArray(["graphic design", "programming", "accounting"]),
        price: faker.random.number({ min: 50, max: 500 }),
        CourseOwner: getRandomFromArray(teachers)._id,
        modules: [], // Initialize with empty array
        rating: faker.random.number({ min: 1, max: 5 }),
        likes: [], // Initialize with empty array
        comments: [], // Initialize with empty array
      };
  
      courses.push(course);
    }
  
    await db.collection("courses").insertMany(courses);
  }

async function seedModule() {
  // Similar structure as seedUsers, but for modules
}

async function seedComment() {
  // Similar structure as seedUsers, but for comments
}

async function seedPaymentMethod(() {
    await db.collection("paymentMethods").deleteMany({});
  
    const paymentMethods = [];
  
    const users = await db.collection("users").find().toArray();
  
    for (let i = 0; i < 50; i++) {
      const paymentMethod = {
        _id: new ObjectId(),
        type: getRandomFromArray(["visa", "mastercard"]),
        amount: faker.random.number({ min: 30000, max: 50000 }),
        cardNumber: faker.finance.creditCardNumber(),
        cardOwner: getRandomFromArray(users)._id,
        CVV: faker.finance.creditCardCVV(),
        created_at: new Date(),
      };
  
      paymentMethods.push(paymentMethod);
    }
  
    await db.collection("paymentMethods").insertMany(paymentMethods);
  }

async function seedTransaction() {
    await db.collection("transactions").deleteMany({});
  
    const transactions = [];
  
    const paymentMethods = await db.collection("paymentMethods").find().toArray();
    const users = await db.collection("users").find().toArray();
  
    for (let i = 0; i < 100; i++) {
      const transaction = {
        _id: new ObjectId(),
        amount: faker.random.number({ min: 100, max: 500 }),
        paymentMethod: getRandomFromArray(paymentMethods)._id,
        giver: getRandomFromArray(users)._id,
        teacherReceiver: getRandomFromArray(users)._id,
        adminReceiver: getRandomFromArray(users)._id,
        whyTran: faker.lorem.sentence(),
        created_at: new Date(),
      };
  
      transactions.push(transaction);
    }
  
    await db.collection("transactions").insertMany(transactions);
  }

async function seedAll() {
  await seedUsers();
  await seedTeacher();
  await seedAdmin();
  await seedStudent();
  await seedChatRoom();
  await seedMessage();
  await seedCourse();
  await seedModule();
  await seedComment();
  await seedPaymentMethod();
  await seedTransaction();

  client.close();
}

seedAll();


//npm install faker
