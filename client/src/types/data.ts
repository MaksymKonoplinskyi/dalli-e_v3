export interface ICard {
  _id: string
  name: string
  prompt: string
  photo: string
}
export interface IFormField {
  labelName: string
  type: string
  name: string
  placeholder: string
  value: string
  isSurpriseMe?: boolean
  handleChange: (event:any) => void
  handleSurpriseMe?: () => void
}
