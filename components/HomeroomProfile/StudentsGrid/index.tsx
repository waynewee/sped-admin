import { Avatar, Card, Col, Row } from "antd";
import { FunctionComponent } from "react";
import { IUser, SkillPoint } from "../../../types";
import { format } from "date-fns";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/router";

interface IStudentsGrid {
  students: IUser[];
}

export const StudentsGrid: FunctionComponent<IStudentsGrid> = ({
  students,
}) => {
  const router = useRouter();

  return (
    <>
      <Row wrap gutter={8}>
        {students.map((student) => {
          return (
            <Col>
              <Card
                onClick={() =>
                  router.push(`${router.asPath}/${student.username}`)
                }
                style={{ height: "100%", cursor: "pointer" }}
                key={student._id}
              >
                <Row justify="center">
                  <Avatar icon={<FaUser />} />
                </Row>
                <div>{student.username}</div>
                <Row>
                  <Col>Last Active:</Col>
                  <Col>
                    {format(
                      new Date(student.updatedAt as string),
                      "MM/dd/yyyy hh:mma"
                    )}
                  </Col>
                </Row>
                <div>
                  {Object.entries(student.skillPoints as SkillPoint[]).map(
                    ([subject, points]) => {
                      return (
                        <Row justify="space-between">
                          <Col>{subject}</Col>
                          <Col>{points}</Col>
                        </Row>
                      );
                    }
                  )}
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
