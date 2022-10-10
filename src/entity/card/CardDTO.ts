export default interface CardDTO {
    original: string
    referenceTranslation: string
    humanTranslation: string
    humanScore: number
    neuralMachineTranslation: string
    neuralMachineScore: number
    statisticalMachineTranslation: string
    statisticalMachineScore: number
}