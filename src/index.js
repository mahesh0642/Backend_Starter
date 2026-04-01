import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
let notes = [];
app.use(express.json()); //To read json data data in req.body
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Notes added successfully",
    notes: notes,
  });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: "note deleted successfully",
    notes: notes,
  });
});

app.patch("/notes/:index",(req, res)=>{
    const index = req.params.index;
    const {title} = req.body
    const {description} = req.body

    notes[index].title = title
    notes[index].description = description
    res.json({
        message: "note updated successfully",
        notes: notes,
    })
})


app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/about", (req, res) => {
  res.send("This is the About Page!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
