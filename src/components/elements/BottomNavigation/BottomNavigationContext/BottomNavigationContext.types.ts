export interface IBottomNavigationContextData {
  onSelect: (id: string) => void;
  activeId: string | null | undefined;
  keepLabel?: boolean;
}
