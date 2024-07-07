import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";
import { Counter } from "./components/class/Counter";
import { Box } from "./components/context/Box";
import { ThemeProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { CustomButton } from "./components/html/CustomButton";
import { Text } from "./components/polymorphic/Text";
import { RandomNumer } from "./components/restriction/RandomNumer";
import { Toast } from "./components/template/Toast";

function App() {
  return (
    <div className="App">
      {/* <Greet name="John" messageCount={10} isLoggedIn={false} /> */}
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Cillian Murphy</Heading>
      </Oscar>
      <Button
        handleClick={(e) => {
          console.log("button is clicked", e);
        }}
      />
      <Input
        handleChange={(e) => {
          console.log(e.target.value);
        }}
        value="some value..."
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeProvider>
        <Box />
      </ThemeProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Counter message="Counter value is" />
      <List
        items={["Batman", "Superman", "Wonder women"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <RandomNumer value={20} isPositive />
      <Toast position="center" />
      <CustomButton variant="primary">Click Me</CustomButton>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="some-id" size="sm" color="red">
        Label
      </Text>
    </div>
  );
}

export default App;
