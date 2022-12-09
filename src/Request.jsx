// import useEffect  from "react";

// export function Userlogin(){

//         useEffect(() => {
//             Data()
//           }, []);
//           const Data = async () => {
//             const data = await fetch("http://localhost:8080/users", {
//               method: "get",
//               headers: {
//                 'Authorization':
//                   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY3MDAwNDQxOCwiZXhwIjoxNjcwMDA4MDE4LCJzdWIiOiIyIn0.WPXw-M-vkWPkQ-NghfwvwRIQzR8dPBORXfktCJsVIJI",
//                 'Content-Type': "application/json"
//               },
//             });
//             const users = await data.json()
//             console.log("esta es mi data", users);
//             return users
//           };

// }


// ---------------------Prueba--------------------- 

// async function main() {
//   console.log("First");

//   let result = await userLogin();
//   console.log("result es: ", result);

//   console.log("Second");
// }

// main();

  // state = {
  //   form: {
  //     email: "",
  //     password: "",
  //   },
  // };
  // handleChange = async (e) => {
  //   await this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  //   // console.log(this.state.form);
  // };


  // const login = (email, password) => {
//   if (email === "lore@gmail.com" && password === "123456") {
//     console.log("tu correo o contraseña  son correctos", email, password);
//   } else {
//     alert("tu correo o contraseña no  son correctos");
//   }
// };
// const [user, setUser] = React.useState(null);

// useEffect(() => {
//   Data();
// }, []);
// const Data = () => {
//   fetch("http://localhost:8080/users")
// .then(response => response.json())
// .then(data => console.log('la data es: ',data));
// };
