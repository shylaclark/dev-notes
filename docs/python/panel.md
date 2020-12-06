# Holoviz Panel

## Examples

#### param.watch() and param.trigger()
```python
    def watch_checkboxgroup(self, events):
        selected = self.checkboxgroup_widget.value
        new_column = [0] * len(self.freestream_numbers.index)
        print(str(selected))

        for x in selected:
            if x == 'Pitch (deg)':
                self.freestream_numbers['Pitch (deg)'] = new_column
            if x == 'Pedal (%)':
                self.freestream_numbers['Pedal (%)'] = new_column
            if x == 'Collective (deg)':
                self.freestream_numbers['Collective (deg)'] = new_column
        self.param.trigger('reload_freestream_numbers_panel')
        
    def user_defined_panel(self):
        print('Reloading user_defined_panel()')
        if self.rcas_type_selector == 'User Defined Trim':
            self.checkboxgroup_widget = pn.widgets.CheckBoxGroup(
                options=self.rotor_controls_objects,
                inline=True
    
            )
            self.checkboxgroup_widget.param.watch(self.watch_checkboxgroup, 'value')
            return pn.Column(self.checkboxgroup_widget)
```

## Resources
