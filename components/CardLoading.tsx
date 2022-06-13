import { Card, Grid, Skeleton } from "@mantine/core"

export default function CardLoading() {
  return (
    <Grid.Col xs={6} sm={4} lg={3} xl={2}>
      <Card shadow="sm" p="lg" radius="lg" withBorder>
        <Skeleton
          circle
          mb="xl"
          height={130}
          style={{
            margin: "0 auto 20px auto",
          }}
        />
        <Skeleton height={10} mt={6} radius="xl" />
        <Skeleton height={10} mt={6} radius="xl" />
        <Skeleton height={10} mt={6} radius="xl" />
        <Skeleton height={10} mt={6} width="70%" radius="xl" />
        <Skeleton height={10} mt={20} radius="xl" />
        <Skeleton height={10} mt={6} radius="xl" />
        <Skeleton height={10} mt={6} radius="xl" />
        <Skeleton height={10} mt={6} width="70%" radius="xl" />
      </Card>
    </Grid.Col>
  )
}
