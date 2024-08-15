import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Text, Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactMarkdown from "react-markdown";

const LoadingIssueDetailPage = () => {
  return (
    <Box>
      <Skeleton width="5rem" />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
