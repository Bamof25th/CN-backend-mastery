export const renderUploadForm = (req, res) => {
  res.render("upload-form", { user: null });
};

export const registerUser = (req, res) => {
  const { name, email } = req.body;
  const filename = req.file.filename;
  console.log(filename);
  res.render("upload-form", { user: { name, email, filename } });
};
