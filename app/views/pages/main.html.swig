{% extends 'layout.html.swig' %}
{% block content %}
    <p>Ohai
    	{% if user %}
    		{{ user.email }}
    	{% endif %} I am an asshat.
    </p>
{% endblock %}