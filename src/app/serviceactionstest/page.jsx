import { addPost, deletePost } from "@/lib/actions";

export default function serviceactionstest () {
    return (
        <>
            <h1>add</h1>
            <form action={addPost} className=" text-gray-600 flex gap-x-2">
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="desc" placeholder="desc" />
                <input type="text" name="slug" placeholder="slug" />
                <input type="text" name="userId" placeholder="userId" />
                <button>submit</button>
            </form>
            <h1>delete</h1>
            <form action={deletePost} className=" text-gray-600 flex gap-x-2">
                <input type="text" name="id" placeholder="id" />
                <button>submit</button>
            </form>
        </>
        
    )
}