# Roadmap

This is the roadmap for next version

### Components
- [x] Menu (Menu.Item, Menu.Divider, Menu.SubMenu)
- [x] Grid (Grid.Col, Grid.Row)
- [x] Bottom Navigation (BottomNavigation.Action)
- [x] Tooltip component
- [ ] In new elements css vars use prefix --lens-ui-elements-var--element-name-var-name
- [ ] Collapse
- [ ] Pagination
- [ ] Timeline
- [ ] Upload
- [ ] Drawer
- [ ] TransferList
- [ ] Autocomplete Input
- [ ] InputSlider
- [ ] TreeList

### Theming
- [x] Theme Provider
- [x] DarkMode
- [ ] Theme Builder (A simple to for changing css variables and creating custom themes)
- [ ] Isolate all components variables using l-var and l-def helpers

### Hooks

- [x] useMediaQuery


### Improvments
- [x] Fix toast
- [x] Improve list item layout
- [x] ~~Update styles to match with typography~~
- [x] Inject license in source using webpack.BannerPlugin
- [x] Improve tabs component using context
- [x] Update useDevice with media queries

### Reworks
- [x] Extract menu to Menu from DropDownMenu component
- [x] Handle Dropdown content in DropdownMenu component
- [x] Rethink useModal and useAlert, make more simple to use, maybe we need only DeviceProvider and ToastProvider
- [x] Update Docs
- [x] Separate Radio from RadioGroup using context (Radio, Radio.Group)
