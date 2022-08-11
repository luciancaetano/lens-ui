# Roadmap

This is the roadmap for next version

### Components
- [x] Menu (Menu.Item, Menu.Divider, Menu.SubMenu)
- [x] Grid (Grid.Col, Grid.Row)
- [x] Bottom Navigation (BottomNavigation.Action)
- [x] Tooltip component
- [ ] Image
- [ ] Pagination
- [ ] Link (Extended Typography)
- [ ] Collapse
- [ ] Timeline
- [ ] Upload
- [ ] PopConfirm
- [ ] Drawer
- [ ] InputNumber
- [ ] TransferList
- [ ] Autocomplete Input
- [ ] InputSlider
- [ ] TreeList

### Theming
- [ ] Theme Provider
- [ ] DarkMode
- [ ] Reorganize and simplify theming and css variables

### Providers

### Hooks

- [x] useMediaQuery


### Improvments
- [x] Fix toast
- [x] Improve list item layout
- [x] ~~Update styles to match with typography~~
- [ ] Inject license in source using webpack.BannerPlugin

### Reworks
- [x] Extract menu to Menu from DropDownMenu component
- [x] Handle Dropdown content in DropdownMenu component
- [x] Rethink useModal and useAlert, make more simple to use, maybe we need only DeviceProvider and ToastProvider
- [x] Update Docs
- [x] Separate Radio from RadioGroup using context (Radio, Radio.Group)

# Concepts of theming

<ThemeProvider settings={(
    <Theme.Setting>
        <Theme.Button intent="danger" backgroundColor="red" />
    </Theme.Setting>
)}>
    ...
</ThemeProvider>