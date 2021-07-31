type Awaited<T> = T extends Promise<infer U> ? U : Awaited<T>
