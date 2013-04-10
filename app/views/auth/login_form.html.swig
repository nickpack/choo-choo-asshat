{% extends 'layout.html.swig' %}
{% block content %}
<form method="POST" actuon="/login">
    <label for="input-email">Email</label>
    <input type="text" id="input-email" name="email" placeholder="Email">
    <label for="input-password">Password</label>
    <input type="password" id="input-password" name="password" placeholder="Password">
    <button type="submit">Sign in</button>
</form>
{% endblock %}