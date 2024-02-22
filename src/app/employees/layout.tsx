import { Container } from "@mantine/core";

export default function EmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container size={"md"} mt={20}>
      {children}
    </Container>
  );
}
