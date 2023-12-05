export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      formations: {
        Row: {
          "Académie de l’établissement": string | null
          "Capacité de l’établissement par formation": number | null
          "Code départemental de l’établissement": string | null
          "Code UAI de l'établissement": string | null
          "Commune de l’établissement": string | null
          "Coordonnées GPS de la formation": string | null
          "Département de l’établissement": string | null
          Établissement: string | null
          "Filière de formation": string | null
          "Filière de formation détaillée": string | null
          "Filière de formation détaillée bis": string | null
          "Filière de formation très agrégée": string | null
          "Filière de formation_1": string | null
          id_formation: number
          "Région de l’établissement": string | null
          Sélectivité: string | null
          Session: number | null
          "Statut de l’établissement de la filière de formation (publi":
            | string
            | null
        }
        Insert: {
          "Académie de l’établissement"?: string | null
          "Capacité de l’établissement par formation"?: number | null
          "Code départemental de l’établissement"?: string | null
          "Code UAI de l'établissement"?: string | null
          "Commune de l’établissement"?: string | null
          "Coordonnées GPS de la formation"?: string | null
          "Département de l’établissement"?: string | null
          Établissement?: string | null
          "Filière de formation"?: string | null
          "Filière de formation détaillée"?: string | null
          "Filière de formation détaillée bis"?: string | null
          "Filière de formation très agrégée"?: string | null
          "Filière de formation_1"?: string | null
          id_formation: number
          "Région de l’établissement"?: string | null
          Sélectivité?: string | null
          Session?: number | null
          "Statut de l’établissement de la filière de formation (publi"?:
            | string
            | null
        }
        Update: {
          "Académie de l’établissement"?: string | null
          "Capacité de l’établissement par formation"?: number | null
          "Code départemental de l’établissement"?: string | null
          "Code UAI de l'établissement"?: string | null
          "Commune de l’établissement"?: string | null
          "Coordonnées GPS de la formation"?: string | null
          "Département de l’établissement"?: string | null
          Établissement?: string | null
          "Filière de formation"?: string | null
          "Filière de formation détaillée"?: string | null
          "Filière de formation détaillée bis"?: string | null
          "Filière de formation très agrégée"?: string | null
          "Filière de formation_1"?: string | null
          id_formation?: number
          "Région de l’établissement"?: string | null
          Sélectivité?: string | null
          Session?: number | null
          "Statut de l’établissement de la filière de formation (publi"?:
            | string
            | null
        }
        Relationships: []
      }
      student: {
        Row: {
          birth_date: string | null
          birth_place: string | null
          created_at: string
          firstname: string | null
          id: number
          ine_number: number | null
          name: string | null
          parent_id: number | null
        }
        Insert: {
          birth_date?: string | null
          birth_place?: string | null
          created_at?: string
          firstname?: string | null
          id?: number
          ine_number?: number | null
          name?: string | null
          parent_id?: number | null
        }
        Update: {
          birth_date?: string | null
          birth_place?: string | null
          created_at?: string
          firstname?: string | null
          id?: number
          ine_number?: number | null
          name?: string | null
          parent_id?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
