import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 9px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: ${(props) =>
    props.active ? "#2563eb" : "#e2e8f0"};

  color: ${(props) =>
    props.active ? "white" : "#0f172a"};

  &:hover {
    background: #2563eb;
    color: white;
  }
`;

function Filter({ filter, setFilter }) {
  return (
    <Container>

      <Button
        active={filter === "All"}
        onClick={() => setFilter("All")}
      >
        All
      </Button>

      <Button
        active={filter === "Active"}
        onClick={() => setFilter("Active")}
      >
        Active
      </Button>

      <Button
        active={filter === "Pending"}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </Button>

      <Button
        active={filter === "Completed"}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </Button>

    </Container>
  );
}

export default Filter;