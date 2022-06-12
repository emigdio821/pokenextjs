import { Card, Grid, Skeleton } from "@mantine/core"

export default function CardLoading() {
  return (
    <Grid.Col xs={6} sm={4} lg={3} xl={2}>
      <Card shadow="sm" p="lg" radius="lg" withBorder>
        <Skeleton
          height={80}
          circle
          mb="xl"
          style={{
            margin: "0 auto 20px auto",
          }}
        />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </Card>
    </Grid.Col>
  )
}
