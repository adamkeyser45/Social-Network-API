const { Schema, model } = require('mongoose');
const { type } = require('os');
const moment = require('moment');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, 'Please put in a username!'],
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+\@.+\..+/, 'Please put in an email!']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// retrieves the amount of friends the user has
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// creates the USer model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;