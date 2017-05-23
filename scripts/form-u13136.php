<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2017.0.2.363
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Formularz Cuqui’s Artisan Cards Submission',
	'heading' => 'New Form Submission',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Checked',
		'checkbox_unchecked' => 'Unchecked',
		'submitted_from' => 'Form submitted from website: %s',
		'submitted_by' => 'Visitor IP address: %s',
		'too_many_submissions' => 'Too many recent submissions from this IP',
		'failed_to_send_email' => 'Failed to send email',
		'invalid_reCAPTCHA_private_key' => 'Invalid reCAPTCHA private key.',
		'invalid_reCAPTCHA2_private_key' => 'Invalid reCAPTCHA 2.0 private key.',
		'invalid_reCAPTCHA2_server_response' => 'Invalid reCAPTCHA 2.0 server response.',
		'invalid_field_type' => 'Unknown field type \'%s\'.',
		'invalid_form_config' => 'Field \'%s\' has an invalid configuration.',
		'unknown_method' => 'Unknown server request method'
	),
	'email' => array(
		'from' => 'haniahabela@gmail.com',
		'to' => 'haniahabela@gmail.com'
	),
	'fields' => array(
		'custom_U13173' => array(
			'order' => 2,
			'type' => 'string',
			'label' => 'Name',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Name\' is required.'
			)
		),
		'Email' => array(
			'order' => 3,
			'type' => 'email',
			'label' => 'Email',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Email\' is required.',
				'format' => 'Field \'Email\' has an invalid email.'
			)
		),
		'custom_U13169' => array(
			'order' => 4,
			'type' => 'string',
			'label' => 'Street',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Street\' is required.'
			)
		),
		'custom_U13161' => array(
			'order' => 5,
			'type' => 'string',
			'label' => 'City',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'City\' is required.'
			)
		),
		'custom_U13142' => array(
			'order' => 6,
			'type' => 'string',
			'label' => 'State',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'State\' is required.'
			)
		),
		'custom_U13147' => array(
			'order' => 7,
			'type' => 'string',
			'label' => 'Zip code',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Zip code\' is required.'
			)
		),
		'custom_U13155' => array(
			'order' => 8,
			'type' => 'string',
			'label' => 'Country',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Country\' is required.'
			)
		),
		'custom_U13165' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'name of the card or cards,
quantity',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'name of the card or cards,
quantity\' is required.'
			)
		),
		'custom_U47055' => array(
			'order' => 9,
			'type' => 'string',
			'label' => 'Phone number',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Phone number\' is required.'
			)
		)
	)
);

process_form($form);
?>
