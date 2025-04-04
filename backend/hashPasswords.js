require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Adjust the path to your User model

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function hashPasswords() {
    const users = await User.find();

    for (let user of users) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        await user.save();
        console.log(`Updated password for user: ${user.email}`);
    }

    console.log('All passwords have been hashed.');
    mongoose.connection.close();
}

hashPasswords().catch(err => {
    console.error(err);
    mongoose.connection.close();
});
