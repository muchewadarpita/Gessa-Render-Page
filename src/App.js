const { useState } = require("react");

const {
  TextField,
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Checkbox,
  Rating,
  Input,
  Card,
  Typography,
} = require("@mui/material");

function App() {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    gender: "",
    feedback: "",
  });

  const [value, setValue] = useState(2);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleChange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(options);
    console.log(value);
    console.log(selectedFile);
    console.log(selectedDate);
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      // replace the URL below with the endpoint you want to upload the file to
      fetch("https://example.com/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("File uploaded successfully.");
          } else {
            console.error("Error uploading file.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // Send form data to server
  };
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "60%",
        height: "100%",
        marginTop: "5%",
        marginLeft: "20%",
        paddingLeft: "2%",
        marginRight: "2%",
        paddingBottom: "5%",
        paddingTop: "3%",
        marginBottom: "5%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: "white",
            paddingBottom: "30%",
            width: "60%",
            height: "100%",
            padding: "30px",
            alignItems: "center",
            marginLeft: "15%",
            marginRight: "50%",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Survey Form
          </Typography>

          <Card
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              fullWidth
              required
              margin="normal"
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Card>
          <br></br>
          <Card sx={{ width: "100%", height: "100%" }}>
            <TextField
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              fullWidth
              required
              margin="normal"
            />
          </Card>
          <br></br>

          <Card sx={{ width: "100%", height: "100%" }}>
            <FormControl component="fieldset" sx={{ mt: 3 }}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Card>
          <br></br>

          <Card sx={{ width: "100%", height: "100%" }}>
            <FormGroup>
              <FormLabel component="legend">
                Select correct options...
              </FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.option1}
                    onChange={handleChange}
                    name="option1"
                  />
                }
                label="Option 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.option2}
                    onChange={handleChange}
                    name="option2"
                  />
                }
                label="Option 2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.option3}
                    onChange={handleChange}
                    name="option3"
                  />
                }
                label="Option 3"
              />
            </FormGroup>
          </Card>
          <br></br>

          <Card sx={{ width: "100%", height: "100%" }}>
            <TextField
              label="Feedback"
              value={formData.feedback}
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
          </Card>
          <br></br>

          <Card
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <TextField
              type="date"
              variant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Card>
          <br></br>

          <Card
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Typography variant="h6">Upload a File</Typography>
            <Input type="file" onChange={handleFileSelect} />
            <Button type="submit" disabled={!selectedFile}>
              Upload
            </Button>
          </Card>
          <br></br>

          <Card
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <div>
              <Rating
                name="basic-rating"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </Card>

          <Button
            type="submit"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4%",
              marginLeft: "40%",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
