import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: #0f172a;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #64748b;
  margin-bottom: 15px;
`;

const Status = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  color: white;
  font-size: 13px;
  margin-right: 8px;

  background: ${(props) => {
    if (props.status === "Active") return "#16a34a";
    if (props.status === "Completed") return "#2563eb";
    return "#f59e0b";
  }};
`;

const Priority = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  color: white;
  font-size: 13px;

  background: ${(props) => {
    if (props.priority === "High") return "#dc2626";
    if (props.priority === "Medium") return "#f59e0b";
    return "#64748b";
  }};
`;

const DeleteButton = styled.button`
  margin-top: 18px;
  padding: 8px 15px;
  border: none;
  border-radius: 7px;
  background: #ef4444;
  color: white;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;

function TaskCard({ task, deleteTask }) {
  return (
    <Card>

      <Title>{task.title}</Title>

      <Description>
        {task.description || "No description"}
      </Description>

      <Status status={task.status}>
        {task.status}
      </Status>

      <Priority priority={task.priority}>
        {task.priority}
      </Priority>

      <br />

      <DeleteButton onClick={() => deleteTask(task.id)}>
        Delete
      </DeleteButton>

    </Card>
  );
}

export default TaskCard;