import { Card, Grid, Group, Skeleton } from "@mantine/core"

export default function CardLoading() {
  return (
    <Grid.Col xs={6} sm={4} lg={3} xl={2}>
      <Card shadow="sm" p="lg" radius="lg" withBorder>
        <Group>
          <Skeleton mb="xl" height={150} />
        </Group>
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
