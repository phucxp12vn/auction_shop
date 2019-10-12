<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Update</title>
	<!-- Latest compiled and minified CSS & JS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="//code.jquery.com/jquery.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<form action="{{url('register')}}" method="POST" role="form">
					<legend>Update</legend>
					@if($errors->has('errorUpdate'))
						<div class="alert alert-danger">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						</div>
					@endif
					<div class="form-group">
						<label for="">Password</label>
						<input type="password" class="form-control" id="password" placeholder="Password" name="password">
					</div>
					<div class="form-group">
						<label for="">Password Confirm</label>
						<input type="password" class="form-control" id="password_confirmation" placeholder="Password Confirm" name="password_confirmation">
						@if($errors->has('password'))
							<p style="color:red">{{$errors->first('password')}}</p>
						@endif
					</div>
					{!! csrf_field() !!}
					<button type="submit" class="btn btn-primary">Cập nhật</button>
				</form>
			</div>
		</div>
	</div>
</body>
</html>