export interface Presenter<Type> {
  print(statement: Type): string
}
