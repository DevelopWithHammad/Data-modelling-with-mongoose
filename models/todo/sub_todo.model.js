import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            required: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, { timestamps: true });

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);

// whenever we gives the model name to mongoose it will convert it to the lower case as well as the first letter will be capital
// As in our case "User" will become "users"