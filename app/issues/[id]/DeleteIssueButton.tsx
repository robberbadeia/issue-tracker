import { Button } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <Link href={`/issues/${issueId}/delete`}>DeleteIssue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
