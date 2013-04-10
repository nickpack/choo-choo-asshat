{% extends 'layout.html.swig' %}
{% block content %}
<form method="POST">
    <label for="input-email">Email</label>
    <input type="text" id="input-email" name="email" placeholder="Email">
    <label for="input-password">Password</label>
    <input type="password" id="input-password" name="password" placeholder="Password">
    <label for="input-password">Confirm password</label>
    <input type="password" id="input-confirm-password" name="confirm-password" placeholder="Confirm Password">
    <button type="submit">Sign up</button>
</form>
{% endblock %}