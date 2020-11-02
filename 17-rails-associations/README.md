##  Rails-Forms-REST

### SWBATs

- [x] Discuss and Review Forms
- [x] form_for, form_tag, form_with
- [x] Checking information before creating
- [x] Strong params
- [x] Private keyword [[Read this](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)]
- [x] link_to, button_tag, submit_tag
- [x] before_action
- [x] Refresher on has_many & belongs_to
- [x] Use Rails form helper methods that create an associated object
- [x] Implement dependent: :destroy in order to destroy associated objects to normalize database
- [x] path helpers

### Process
- Model
- Migration
  - Test it
- Route
- Controller method
  - Test it
- View
  - Test it
  - Refactor if needed


### Code Snippets

- Collection Select
```rb

  <%= collection_select object, method, collection, value_method, text_method %>

    <select name="object[method]" id="object_method">
      <option value="value_method">text_method</option>
      <option value="value_method">text_method</option>
      ...
    </select>

  <%= f.collection_select method, collection, value_method, text_method  %>

  <%= f.collection_select(:author_id, Author.all, :id, :name) %>
```


- link_to
  ```rb
    <%= link_to "Edit", edit_user_path(user) %>
  ```
